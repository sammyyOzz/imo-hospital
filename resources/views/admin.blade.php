@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card pb-4">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged into the admin panel as {{ auth()->user()->name }}
                </div>

                <div id="example" name="Samuel Oziegbe" authname="{{ auth()->user()->name }}"></div>
            </div>
        </div>
    </div>
</div>
@endsection
