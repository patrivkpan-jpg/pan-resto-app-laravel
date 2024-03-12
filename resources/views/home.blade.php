<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <title>RestoPan</title>

        @viteReactRefresh
        @vite('resources/js/index.jsx')
        @vite('resources/css/app.css')
    </head>
    <body>
        <div id="root">

        </div>
    </body>
</html>
