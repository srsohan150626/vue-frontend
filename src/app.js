import Vue from 'vue';

Vue.component('accordion',{
    props: ['item'],
    template: `
        <div>
            <p>{{ item.title }}</p>
            <p @click="toggle = ! toggle">Details</p>
            <p v-if="toggle">{{ item.description }}</p>
        </div>
    `,
    data: function() {
        return  {
            toggle: false,
        }
       
    }
});
new Vue({
    el: '#app',

    data: {
        items: [
            {id: 1, title: 'Title 1', description: "Description for Tab 1"},
            {id: 2, title: 'Title 2', description: "Description for Tab 2"},
            {id: 3, title: 'Title 3', description: "Description for Tab 3"},
        ]
    }
})