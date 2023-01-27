<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in itens" :key="index"
            @click="item.click()"
        >
          <v-icon left>{{ item.icone }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <ModalEditar
    v-if="itens[0].modal"
    @fechaModal="itens[0].modal = false"
    :tarefa="tarefa"
     />
    
    <ModalDelete 
    v-if="itens[1].modal"
    @fechaModal="itens[1].modal = false"
    :tarefa="tarefa"   
    />
  </div>
</template>

<script>
import ModalDelete from '../modal/modalDelete.vue';
import ModalEditar from '../modal/modalEditar.vue';
export default {
    props:['tarefa'],
  components: { ModalEditar, ModalDelete },
  data: () => ({
    itens: [
      { icone:"mdi-pencil", 
              title: 'Editar',
              modal: false,
              click(){
                console.log("Editar")
                this.modal = true
      } },
      { icone: "mdi-trash-can", 
      title: "Excluir", 
      modal: false,
      click() {
        console.log('excluir')
        this.modal = true
      }  },
    ],
  }),
};
</script>

<style></style>
