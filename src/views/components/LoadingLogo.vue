<template>
  <div class="loading-cache">
    <div class="loading-logo-box">
      <div />
      <div />
    </div>
  </div>
</template>

<style lang="scss">
@use "@styles/globalVariables.scss" as gv;

.loading-cache {
  z-index: gv.$z-index-loading-logo;
  background-color: gv.$loading-logo-cache;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .loading-logo-box {
    background-color: transparent;
    position: relative;
    width: calc(gv.$loading-logo-size * 12);

    div {
      position: absolute;
      width: gv.$loading-logo-size;
      height: gv.$loading-logo-size;
      border-radius: calc(gv.$loading-logo-size / 2);
      background-color: gv.$color0;
      border: 1px solid gv.$loading-logo-transparent;

      &:nth-child(1) {
        animation: loading-animation1 1.4s infinite ease-in-out;
      }

      &:nth-child(2) {
        animation: loading-animation2 1.4s infinite ease-in-out;
      }
    }
  }

  @keyframes loading-animation1 {
    0% {
      width: gv.$loading-logo-size;
      margin-left: 0;
    }
    10% {
      width: gv.$loading-logo-size;
      margin-left: 0;
    }
    50% {
      width: calc(gv.$loading-logo-size * gv.$loading-logo-size-coefficient);
      margin-left: 0;
    }
    90% {
      width: gv.$loading-logo-size;
      margin-left: calc(
        gv.$loading-logo-size * (gv.$loading-logo-size-coefficient - 1)
      );
      opacity: 1;
    }
    100% {
      width: gv.$loading-logo-size;
      margin-left: calc(
        gv.$loading-logo-size * (gv.$loading-logo-size-coefficient - 1)
      );
      opacity: 0;
    }
  }

  @keyframes loading-animation2 {
    0% {
      opacity: 0;
    }
    96% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
