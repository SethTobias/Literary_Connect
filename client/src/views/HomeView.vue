<template>
  <div id="home">
<Sign v-if="notSign"/>
    <div if="home-container">
      <div class="home-card">
        <div class="card-header">
          <div></div>
          <div>
            <p>
              Profile Name - <span class="bookmark">Bookmark/Bookmarked </span>
            </p>
            <p>Posted n min/day/week ago</p>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div class="card-body">
          <div class="card-data"></div>
          <div class="card-indicators">
            <i class="fa-solid fa-circle-arrow-left"></i>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>
        <div class="card-footer">
          <div class="post-dash">
            <div>
              <i class="fa-regular fa-heart"></i>
              <!-- <i class="fa-solid fa-heart"></i>   -->
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
          <div class="dash-data">
           <div class="comments-container">
            View Comments
        </div>
            <div class="post-comment">
              <div class="comment-icon">
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-plus"></i>
              </div>
              <input type="text" placeholder="Add a Comment" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="home-dash">
      <h3>Signed in as...</h3>
      <div class="dash-user">
        <div class="user-chip">
          <div class="user-pp"></div>
          <div class="user-info">
            <div class="user-name">
              <p>Profile Name</p>
              <p>Actual Name</p>
            </div>
            <i class="fa-solid fa-right-left"></i>
          </div>
        </div>
      </div>
      <h3>Suggestions...</h3>
      <div class="dash-sugg">
        <div class="sugg-chip">
          <div class="sugg-pp"></div>
          <div class="sugg-info">
            <div class="user-name">
              <p>Profile Name</p>
              <p>Actual Name</p>
            </div>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <h3>Catch up with...</h3>
      <div class="dash-catch">
        <div class="catch-chip">
          <div class="catch-pp"></div>
          <div class="catch-info">
            <div class="user-name">
              <p>Profile Name</p>
              <p>Actual Name</p>
            </div>
            <i class="fa-solid fa-feather-pointed"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from "../components/Sign.vue"; 
export default {
  components: {
    Sign,
  },
  props: {
    notSign: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
