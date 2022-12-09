<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use App\Models\Facturas;
use Illuminate\Http\Request;

class FacturasController extends Controller
{
    public function store(Request $request)
    {
        $search_cliente = Clientes::find($request->input('documento'));
        if (!$search_cliente) {
            $instance_cliente = new Clientes;
            $instance_cliente->documento = $request->input('documento');
            $instance_cliente->nombre = $request->input('nombre');
            $instance_cliente->apellido = $request->input('apellido');
            $instance_cliente->save();
        }

        $instance_factura = new Facturas;
        $instance_factura->total = $request->input('total');
        $instance_factura->cliente_documento = $request->input('documento');
        $instance_factura->save();

    }

    public function show($id)
    {
        return Facturas::findOrFail($id);
    }
}
