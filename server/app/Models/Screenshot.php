<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Screenshot extends Model
{
    protected $fillable = [
        'image', 'site'
    ];
}
