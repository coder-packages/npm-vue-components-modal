<template>
  <portal to="modals">
    <div class="c-modal">
      <div class="c-modal__backdrop"></div>
      <div class="c-modal__scroller">
        <div class="c-modal__wrapper">
          <span class="c-modal__close-btn"></span>
          <div class="c-modal__container">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<style lang="scss" src="./modal.scss"></style>
