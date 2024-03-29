<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('username', 255);
            $table->string('password', 255);
            $table->timestamps();
        });
        Schema::table('menu', function (Blueprint $table) {
            $table->foreignId('created_by')
                ->after('image_id')
                ->references('id')
                ->on('users');
            $table->foreignId('updated_by')
                ->nullable()
                ->after('created_by')
                ->references('id')
                ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
