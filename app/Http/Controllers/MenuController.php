<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\MenuModel;
use App\Models\ImageModel;
use App\Models\UserModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $response = MenuModel::all();
            return response()->json(parent::response('SUCCESS', 'Successfully retrieved menu.', $response), 200);
        } catch (Exception $e) {
            Log::info($e->getMessage());
            return response()->json(parent::response('FAIL', 'Something went wrong with the request.'), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [ 
            'name' => [
                'required',
                'max:255',
            ],
            'description' => [
                'sometimes',
                'max:255'
            ],
            'price' => [
                'required'
            ],
            'image_id' => [
                'required'
            ],
            'created_by' => [
                'required',
            ]
        ]);
        if ($validator->fails()) {
          return response()->json(parent::response('FAIL', 'Validation failed.', $validator->errors()), 422);
        }
        
        try {
            $response = MenuModel::create($data);
            return response()->json(parent::response('SUCCESS', 'Successfully added menu item.', $response), 200);
        } catch (Exception $e) {
            Log::info($e->getMessage());
            return response()->json(parent::response('FAIL', 'Something went wrong with the request.'), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function get(string $id)
    {
        return MenuModel::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $data = $request->all();
        $validationData = array_merge($data, [
            'id' => $id
        ]);
        $validator = Validator::make($validationData, [ 
            'id' => [
                'required',
                'integer',
                'exists:menu',
            ],
            'name' => [
                'prohibited'
            ],
            'description' => [
                'sometimes',
                'max:255'
            ],
            'price' => [
                'sometimes',
                'max:255'
            ],
            'image_id' => [
                'sometimes',
                'exists:images,id'
            ],
            'updated_by' => [
                'required',
                'exists:users,id'
            ]
        ]);
        if ($validator->fails()) {
            return response()->json(parent::response('FAIL', 'Validation failed.', $validator->errors()), 422);
        }

        try {
            MenuModel::where('id', $id)
                ->update($data);
            return response()->json(parent::response('SUCCESS', 'Successfully updated menu item.', $this->get($id)), 200);
        } catch (Exception $e) {
            Log::info($e->getMessage());
            return response()->json(parent::response('FAIL', 'Something went wrong with the request.'), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $validator = Validator::make(['id' => $id], [ 
            'id' => [
                'required',
                'integer',
                'exists:menu',
            ]
        ]);
        if ($validator->fails()) {
            return response()->json(parent::response('FAIL', 'Validation failed.', $validator->errors()), 422);
        }

        try {
            MenuModel::destroy($id);
            return response()->json(parent::response('SUCCESS', 'Successfully deleted menu item.'), 200);
        } catch (Exception $e) {
            Log::info($e->getMessage());
            return response()->json(parent::response('FAIL', 'Something went wrong with the request.'), 500);
        }
    }
}
