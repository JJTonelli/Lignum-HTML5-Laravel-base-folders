<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;

    public function peliculas(){
        return $this->hasMany(Pelicula::class, 'actorPrincipalId', 'id');
    }
}
