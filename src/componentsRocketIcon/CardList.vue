<script setup lang="ts">
import Card from './Card.vue';
import RocketIcon from './RocketIcon.vue';
</script>

<template>
  <div>
    <Card title="Title" class="card">
      <div class="flex m-2">
        ここにさまざまなコンテンツが入ります
        <RocketIcon />
      </div>
    </Card>
  </div>

  <div>
    <Card title="Icons" class="card">
      <div class="flex flex-row justify-center m-2">
        <RocketIcon />
        <RocketIcon />
        <RocketIcon />
        <RocketIcon />
        <RocketIcon />
      </div>
    </Card>
  </div>

  <div>
    <Card title="Icons + Texts" class="card">
      <div class="flex flex-row justify-center m-2">
        <RocketIcon />
        <span>Rockets</span>
        <RocketIcon />
      </div>
    </Card>
  </div>
</template>
