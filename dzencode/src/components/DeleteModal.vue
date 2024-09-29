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
      <p>{{ $t('modalText') }}</p>
      <p class="modal__title">
        <span>{{ deleteConfirmation.title }}</span>
        <br />
        <span>{{ deleteConfirmation.date }}</span>
      </p>
      <div class="modal__button-group">
        <button class="modal__cancel-btn" @click="cancelDelete()">{{ $t('cancel') }}</button>
        <button class="modal__delete-btn" @click="deleteOrder(deleteConfirmation.id)">
          <img src="../assets//icon/delete-red.svg" alt="" />
          {{ $t('delete') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: var(--white-color);
    border-radius: 8px;
    text-align: center;
    width: 500px;
    height: 200px;
  }

  &__title {
  font-weight: bold;
  margin-bottom: 20px;
   & span:nth-last-child(1) {
    font-size: 0.8rem;
    font-weight: 100;
    }
  }

  &__close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  box-shadow: 1px 2px 2px var(--gray-color);
  transform: translate(50%, -50%);
  background-color: var(--white-color);
  top: 0;
  right: 0;
  transition-duration: 0.4s;
  &:hover {
  box-shadow:
    0 8px 16px 0 #00000033,
    0 6px 20px 0 #00000030;
    }
  }

  &__button-group {
  background-color: var(--green-color);
  height: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  gap: 5px;
  }

  &__delete-btn {
  display: flex;
  gap: 5px;
  background-color: var(--white-color);
  color: var(--red-color);
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  transition-duration: 0.4s;
  &:hover {
  box-shadow:
    0 8px 16px 0 #00000033,
    0 6px 20px 0 #00000030;
    }
  }

  &__cancel-btn {
  padding: 10px 20px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  transition-duration: 0.4s;
  &:hover {
  box-shadow: 0 8px 16px 0 #00000033;
    }
  }

}

</style>
