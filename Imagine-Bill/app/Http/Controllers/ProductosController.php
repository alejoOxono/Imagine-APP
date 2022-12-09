<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    public function index()
    {
        return Productos::all();
    }

    public function store(Request $request)
    {
        $instance_producto = new Productos;
        $instance_producto->nombre = $request->input('nombre');
        $instance_producto->precio = $request->input('precio');
        $instance_producto->iva = $request->input('iva');
        $instance_producto->save();
    }

    public function show($id)
    {
        return Productos::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $search_producto = Productos::find($id);
        $search_producto->nombre = $request->input('nombre');
        $search_producto->precio = $request->input('precio');
        $search_producto->iva = $request->input('iva');
        $search_producto->save();
    }

    public function destroy($id)
    {
        $search_producto = Productos::findOrFail($id);
        $search_producto->delete();
    }
}
