<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="box border-bottom mb-3 py-2 px-2"
            v-for="item in boxs"
            :key="item.id"
          >
            <div
              class="d-flex gap-3 align-items-center justify-content-end text-box"
            >
              <div class="d-flex flex-column align-items-end">
                <h1 v-if="item.title">{{ item.title }}</h1>

                <p class="text-end">
                  {{ item.des }}
                </p>
                <div class="d-flex gap-2 align-items-center mb-3">
                  <div class="box-num">
                    <span>{{ item.count }}</span>
                  </div>
                  <span v-if="item.refernce" class="text-danger fw-medium mb-2">
                    {{ item.refernce }}
                  </span>
                </div>
                <small v-if="item.hient">{{ item.hient }}</small>
              </div>
              <div class="count">
                <button @click="decrement(item.id)">
                   {{ item.num < 10 ? "0" + item.num : item.num }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../assets/date.json"
export default {
  data() {
    return {
     boxs: data,
    };
  },
  methods: {
    decrement(id) {
      const item = this.boxs.find((box) => box.id === id);
      if (item && item.count > 0) {
        item.count--;
      }
    },
  },
};
</script>

<style scoped>

</style>
