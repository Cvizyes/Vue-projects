new Vue ({
  el: 'body',
  data:{
    nuevaTarea:'',
    tareas:[
      {nombre:'learn how to make a development'},
      {nombre:'learn how to speak another lenguage'},
    ],
  },
  
  methods:{
    guardarTarea: function(tarea){
      if (tarea.trim()){
         this.tareas.push({nombre: tarea});
      this.nuevaTarea = '';   
  }else{
    alert('introduzca un valor')
       }
      },

  eliminarTarea: function(tarea){
 if(confirm('!desea eliminar'+ tarea.nombre + '?'))
 this.tareas.$remove(tarea);
 }
  
  }
  
});