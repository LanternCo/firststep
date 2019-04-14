<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['json.response']], function () {
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

    // public routes
    Route::post('/login', 'AuthController@login')->name('login.api');
    Route::post('/register', 'AuthController@register')->name('register.api');

    // private routes
    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', 'AuthController@logout')->name('logout');
        Route::get('projects', 'ProjectController@index');
        Route::post('projects', 'ProjectController@store');
        Route::get('projects/{id}', 'ProjectController@show');
        Route::put('projects/{project}', 'ProjectController@markAsCompleted');
        Route::post('tasks', 'TaskController@store');
        Route::put('tasks/{task}', 'TaskController@markAsCompleted');
    });
});
