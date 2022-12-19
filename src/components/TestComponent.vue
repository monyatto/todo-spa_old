<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStoreProducts } from '../stores/products';
import { useStoreCart } from '../stores/cart';
import ShoppingCart from './ShoppingCart.vue';

const { products } = storeToRefs(useStoreProducts());
const { getProducts } = useStoreProducts();
const { addCart } = useStoreCart();

onMounted(() => {
  //getProductsで配列を返してそれをproductsに保存する。
  getProducts();
});
</script>

<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.id">
      {{ product.title }} - ¥{{ product.price.toLocaleString() }}
      <button @click="addCart(product)" :disabled="!product.inventory">
  カートへ
</button>
    </li>
  </ul>
  <hr />
  <ShoppingCart />
</template>















<!--<script setup>
// import { useStoreCounter } from '../stores/counter';
// // 以下書き換え後
// import { storeToRefs } from 'pinia';
// const counter = useStoreCounter();
// const { count,doubleCount } = storeToRefs(counter);
// const { increment } = counter;
//
// const patch = () => {
//   counter.$patch({
//     count: 100,
//     user: {
//       name: 'Jane Doe',
//     },
//   });
// };

</script>-->


<!-- <template>
<h1>Pinia入門</h1>
<p>Count:{{ count }}</p>
<p>DoubleCount:{{ doubleCount }}</p>
<div>
<button @click="increment">Up</button>
<button @click="counter.$reset">Reset</button>
<button @click="patch">Patch</button>
</div>
</template> -->
