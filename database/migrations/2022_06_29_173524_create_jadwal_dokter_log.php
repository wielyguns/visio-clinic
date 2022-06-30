<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jadwal_dokter_log', function (Blueprint $table) {
            $table->integer('jadwal_dokter_id');
            $table->integer('id');
            $table->string('hari');
            $table->date('tanggal');
            $table->primary(['jadwal_dokter_id', 'id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jadwal_dokter_log');
    }
};
