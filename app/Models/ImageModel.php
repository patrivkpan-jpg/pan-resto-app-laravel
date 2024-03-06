<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\MenuModel;

class ImageModel extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $primaryKey = 'id';
    
    protected $fillable = ['name', 'filename'];
    
    public function menuItem(): HasMany
    {
        return $this->hasMany(MenuModel::class);
    }
}
