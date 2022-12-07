<?php

namespace App\Http\Controllers;

use App\Models\Facturas;
use Illuminate\Http\Request;

class FacturasController extends Controller
{
    public function store(Request $request)
    {
        $instance_factura = new Facturas;
        $instance_factura->total = $request->input('total');
        $instance_factura->cliente_id = $request->input('cliente_id');
        $instance_factura->save();
    }

    public function show($id)
    {
        return Facturas::findOrFail($id)->get();
    }
}
