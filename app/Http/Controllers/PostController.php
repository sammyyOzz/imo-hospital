<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        // $posts = Post::where('image', '&&', 'write_up', '!=', nullValue()->get();

        return view('home');
    }
}
