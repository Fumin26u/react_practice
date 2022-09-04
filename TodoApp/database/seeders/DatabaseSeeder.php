<?php

namespace Database\Seeders;

use App\Models\Todos;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    protected $model = Todos::class;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Todos::factory(10)->create();
    }
}
