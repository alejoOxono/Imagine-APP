<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    use HasFactory;
    protected $primaryKey = 'documento';

    public function facturas()
    {
        return $this->hasMany(Facturas::class);
    }
}
