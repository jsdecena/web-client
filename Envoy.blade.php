@servers(['web' => '-A -l deploy 13.81.61.151 -v -t -i ~/.ssh/digitaltolk'])

@story('deploy')
    pre-deploy
    start
    npm
    build
@endstory

@task('pre-deploy')
    echo "Install Node and NPM"
    sudo apt-get install -y python-software-properties
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
@endtask

@task('start', ['on' => 'web'])
    echo "Step 1. Changing directory to /var/www/wc/";
    cd /var/www/wc/

    echo "Deployment Starting; Checking out " {{ $branch }}
    git checkout {{ $branch }}

    echo "git reset --hard"
    git reset --hard

    echo "Pulling repository from" {{ $branch }}
    git pull origin {{ $branch }}
@endtask

@task('npm', ['on' => 'web'])

    echo "Step 2. Changing directory to cd /var/www/wc/ and copy ENV";
    cd /var/www/wc/ && cp .env.example .env

    echo "Running npm install"
    npm install

    echo "Rebuild node-sass"
    npm rebuild node-sass --force
@endtask

@task('build', ['on' => 'web'])

    echo "Step 3. Changing directory to cd /var/www/wc/";
    cd /var/www/wc/

    @if ($branch == 'develop')
        echo "Build develop assets"
        npm run build:dev
    @else
        echo "Build production assets"
        npm run build:prod
    @endif
@endtask