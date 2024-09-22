<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store/store'
import { computed } from 'vue'

const store = useStore(key)
const deleteConfirmation = computed(() => store.getters.deleteConfirmation)
const deleteOrder = (orderId) => store.commit('deleteOrder', orderId)
const cancelDelete = () => store.commit('cancelDelete')
</script>

<template>
  <div v-if="deleteConfirmation" class="modal">
    <div class="modal__content">
      <div class="modal__close-btn" @click="cancelDelete()">
        <img src="../assets/icon/x-lg.svg" alt="x-circle" />
      </div>
      <p>Are you sure you want to delete this order?</p>
      <p class="modal__title">
        <span>{{ deleteConfirmation.title }}</span>
        <br />
        <span>{{ deleteConfirmation.date }}</span>
      </p>
      <div class="modal__button-group">
        <button class="modal__cancel-btn" @click="cancelDelete()">Відміна</button>
        <button class="modal__delete-btn" @click="deleteOrder(deleteConfirmation.id)">
          <img src="../assets//icon/delete-red.svg" alt="" />
          Видалити
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  width: 500px;
  height: 200px;
}

.modal__title {
  font-weight: bold;
  margin-bottom: 20px;
}
.modal__title span:nth-last-child(1) {
  font-size: 0.8rem;
  font-weight: 100;
}

.modal__close-btn {
  position: absolute;
  background-color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  box-shadow: 1px 2px 2px #666;
  transform: translate(50%, -50%);
  background-color: #fff;
  top: 0;
  right: 0;
  transition-duration: 0.4s;
}

.modal__close-btn:hover {
  box-shadow:
    0 8px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal__button-group {
  background-color: #01b201;
  height: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  gap: 5px;
}

.modal__delete-btn {
  display: flex;
  gap: 5px;
  background-color: #ffffff;
  color: #ff0000;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  transition-duration: 0.4s;
}

.modal__delete-btn:hover {
  box-shadow:
    0 8px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal__cancel-btn {
  padding: 10px 20px;
  color: white;
  background-color: inherit;
  border: none;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 25px;
}

.modal__cancel-btn:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
