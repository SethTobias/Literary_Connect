<template>
  <div id="single">
    <div class="single-img">
      <div class="single-indicators">
        <i class="fa-solid fa-circle-arrow-left"></i>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
    </div>
    <div class="single-info">
      <div class="info-header">
        <div></div>
        <div>
          <p>
            Profile Name - <span class="bookmark">Bookmark/Bookmarked </span>
          </p>
          <p>Posted n min/day/week ago</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div class="info-icon">
        <div>
          <i class="fa-regular fa-heart"></i>
          <!-- <i class="fa-solid fa-heart"></i>-->
          <p>n likes</p>
        </div>
        <div>
          <div>
            <i class="fa-regular fa-comment"></i>
            <!-- <i class="fa-solid fa-comment"></i> -->
          </div>
          <div>
            <i class="fa-regular fa-user"></i>
            <!-- <i class="fa-solid fa-user"></i> -->
          </div>
        </div>
        <div>
          <i class="fa-regular fa-paper-plane"></i>
          <!-- <i class="fa-solid fa-paper-plane"></i> -->
        </div>
        <i class="fa-solid fa-box-archive"></i>
      </div>
    </div>
    <div class="info-comment">
      <p>Caption...</p>
      <div class="comments-container"></div>
      <div class="comment-input">
        <div class="comment-icon">
          <i class="fa-solid fa-comment"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
        <input type="text" placeholder="Add a Comment" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
