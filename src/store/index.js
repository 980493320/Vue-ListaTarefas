import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: [


        ]
    },
    getters: {},
    mutations: {
        adicionaTarefa(state, titulo) {
            if (titulo) {
                state.tarefas.push({
                    id: new Date().getTime(),
                    titulo,
                    concluído: false
                })
            }
        },
        removeTarefa(state, id) {
            state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
        },
        editaTarefa(state, novaTarefa) {
            let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
            tarefa.titulo = novaTarefa.titulo;
            //console.log(tarefa)
        }
    },
    actions: {},
    modules: {}
})