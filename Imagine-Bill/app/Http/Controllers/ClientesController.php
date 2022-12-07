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
        if(!$instance_cliente->documento){
            return "valor nulo en documento";
        }
        $instance_cliente->nombre = $request->input('nombre');
        $instance_cliente->apellido = $request->input('apellido');
        $instance_cliente->save();
    }

    public function show($id)
    {
        return Clientes::findOrFail($id);
    }

    public function destroy($id)
    {
        $search_cliente = Cliente::findOrFail($id);
        $search_cliente->delete();
    }
}
