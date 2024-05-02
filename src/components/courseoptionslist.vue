<template>
  <div style="height: 100%; position: relative; align-items: center">
    <v-card-text
      v-if="!data.item.elements.length > 0"
      style="
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        text-align: center;
        padding: 10em;
      "
    >
      Fügen sie eine oder mehrere Einheiten und/oder Fragenkataloge der Drag'n Drop zu den
      Kursoptionen hinzu.
    </v-card-text>

    <v-list
      color="#FFFFFF"
      class="mt-0 pt-0"
      style="
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        background-color: transparent;
        overflow-y: auto;
      "
    >
      <draggable
        :group="{ name: 'people', put: true }"
        class="dragArea list-group w-full h-full"
        :list="data.item.elements"
        @change="changed"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <ListItemCourseOption
          :item="item"
          :index="i"
          v-for="(item, i) in data.item.elements"
          :key="i"
          :closeClick="removeItem"
        />
      </draggable>
    </v-list>
  </div>
</template>

<script>
import ListItemCourseOption from "@/components/listItems/listItemCourseOption.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "CoursesList",
  setup() {},
  data: () => ({
    data: {
      id: 0,
      edit: false,
      item: {
        id: 0,
        title: "Initialer Fragebogen",
        subtitle: "Lorem Ipsum 1",
        description:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
        image: require("@/assets/sunshine.jpg"),
        progress: 0,
        max_progress: 1,
        duration: "10 Min.",
        course_type: 2,
        elements: [],
        requirements: [],
        completed: [],
      },
    },
    isDragging: false,
  }),
  props: ["searchText"],
  watch: {
    /*data: function () {
      console.log("update-data:\n" + JSON.stringify(this.data));
    },*/
  },
  components: {
    ListItemCourseOption,
    draggable: VueDraggableNext,
  },
  mounted: function () {
    console.log(JSON.stringify(this.$route.params.data));
    this.data = JSON.parse(this.$route.params.data);
  },
  methods: {
    removeItem(item) {
      console.log("remove item: " + item);
      this.data.item.elements.splice(this.data.item.elements.indexOf(item), 1);
    },
    changed(evt) {
      console.log("dragevent: " + evt);
      console.log("drageventdata: " + JSON.stringify(this.data.item.elements));
    },
  },
};
</script>

<style></style>
