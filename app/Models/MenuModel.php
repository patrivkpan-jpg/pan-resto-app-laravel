<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\ImageModel;
use App\Models\UserModel;

class MenuModel extends Model
{
    use HasFactory;

    protected $table = 'menu';

    protected $primaryKey = 'id';
    
    protected $fillable = ['name', 'description', 'price', 'image_id', 'created_by'];

    public function image(): BelongsTo
    {
        return $this->belongsTo(ImageModel::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class);
    }
}
