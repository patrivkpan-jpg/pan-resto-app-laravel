<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\MenuModel;

class UserModel extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $primaryKey = 'id';
    
    protected $fillable = ['name', 'username', 'password'];
    
    public function menuItem(): HasMany
    {
        return $this->hasMany(MenuModel::class);
    }
}
