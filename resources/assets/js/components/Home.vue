<template>
    <b-container>
        <b-row>
            <b-col cols="12" align-v="center">
                <h1>Selecciona un archivo .dat o .asc</h1>
                <hr>
            </b-col>
            <b-col cols="12">
                <div role="form">
                    <b-form>
                        <b-form-file :state="Boolean(file)" placeholder="Ej. Espectro.asc o Espectro .dat" accept=".asc, .dat" @change="filesChange($event.target.files);" name="archivo"></b-form-file>
                        <br>
                        <b-button type="submit" variant="primary" :disabled="isOk" @click.prevent="onSubmit">Cargar archivo</b-button>
                    </b-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import axios from 'axios'
    const SUCCESS = true, FAILED = false;
    export default {
        name: "home",
        data() {
            return {
                file: null,
                fileStatus: null
            }
        },
        computed:{
            isOk(){
                return !this.fileStatus === SUCCESS;
            }
        },
        methods: {
            filesChange(fileList) {
                if(this.checkExtension(fileList[0].name)){
                    const formData = new FormData();
                    if (!fileList.length) return;
                    Array
                        .from(Array(fileList.length).keys())
                        .map(x => {
                        formData.append('archivo', fileList[x], fileList[x].name);
                });
                    this.file = formData;
                    this.fileStatus = SUCCESS;
                }else {
                    alert("Error! El archivo no es valido");
                    this.fileStatus = FAILED;
                }
            },
            onSubmit() {
                // upload data to the server
                var router = this.$router;
                axios.post('http://localhost:80/TT1/php/uploadFile.php', this.file)
                    .then(res => {
                    console.log("OK: ");
                console.log(res.data);
                // router.push({
                //     name: 'plotear',
                //     params: { cx: this.x_value.data.x, cy:this.x_value.data.y }
                // });
            })
            .catch(err => {
                    this.uploadError = err.response;
                console.log("ERROR: " + this.uploadError);
                this.fileStatus = FAILED;
            });
            },
            checkExtension(ext){
                ext =  ext.split('.').pop();
                return (ext == "asc" || ext == "dat");
            }
        }
    }
</script>