<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta name="crf-token" content="{{csrf_token()}}">
</head>
<body>
    <div id="app">
<v-app>
    <app-home></app-home>
</v-app>
</div>
</body>
</html>

<script src="{{ asset('js/app.js') }}"></script>
