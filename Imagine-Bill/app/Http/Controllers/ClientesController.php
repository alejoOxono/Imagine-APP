<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    public function index()
    {
        return Clientes::all();
    }

    public function store(Request $request)
    {
        $instance_cliente = new Clientes;
        $instance_cliente->documento = $request->input('documento');
        $instance_cliente->nombre = $request->input('nombre');
        $instance_cliente->apellido = $request->input('apellido');
        $instance_cliente->save();
    }

    public function show($id)
    {
        return Clientes::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $search_cliente = Clientes::find($id);
        if ($search_cliente->documento == $request->input('documento')) {
            $search_cliente->nombre = $request->input('nombre');
            $search_cliente->apellido = $request->input('apellido');
            $search_cliente->save();
        } else {
            $search_cliente->delete();
            $instance_cliente = new Clientes;
            $instance_cliente->documento = $request->input('documento');
            $instance_cliente->nombre = $request->input('nombre');
            $instance_cliente->apellido = $request->input('apellido');
            $instance_cliente->save();
        }
    }

    public function destroy($id)
    {
        $search_cliente = Clientes::find($id);
        $search_cliente->delete();
    }
}
