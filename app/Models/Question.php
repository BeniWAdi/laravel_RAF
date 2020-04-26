<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];

    //not fillable field
    //protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

    public function categori(){
        return $this->belongsTo(Category::class);
    }

    public function getPathAttribute(){
        return asset('api/question/'.$this->slug);
    }


}
