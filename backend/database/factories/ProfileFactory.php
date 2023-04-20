<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id" => rand(1,10),
            "first_name" => $this->faker->firstName,
            "last_name" => $this->faker->lastName,
            "description" => $this->faker->text(50),
            "profession" => $this->faker->sentence,
            "phone" => $this->faker->e164PhoneNumber,
            "address" => $this->faker->address,
            "profile_picture" =>  $this->faker->image('public/storage/images', 400,300, null, false),
        ];
    }
}
