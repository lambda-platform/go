import krudtools from "./krudtools.vue"
import {isCan} from "../../datagrid/utils/permission";

export default {
    props: ["title", "icon", "grid", "form",
        "hideHeader", "hasSelection", "actions",
        "dbClickAction", "onRowSelect", "rowCurrentChange",
        "permissions", "user_condition", "custom_condition",
        "view_url", "mode", "onPropertySuccess",
        "onPropertyError", "page_id", "withoutHeader", "withCrudLog", "projects_id"],
    components: {
        krudtools
    },
    data() {
        return {
            closeByBtn: window.init.closeByBtn,
            gridSrc: "",
            formSrc: "",
            editMode: false,
            searchModel: '',
            form_width: 600,
            exportLoading: false,
            isPrint: false,
            isExcel: false,
            isExcelUpload: false,
            excelUploadCustomUrl: null,
            isRefresh: false,
            isSave: false,
            rowId: null,
        };
    },
    computed: {
        hasVNavSlot() {
            return !!this.$slots['v-nav']
        },
        hasNavSlot() {
            return !!this.$slots['nav']
        },
        hasLeftSlot() {
            return !!this.$slots['left']
        },
        url(){
            if(this.projects_id !== null && this.projects_id != "" && this.projects_id != undefined){
                if(window.init.microserviceSettings){
                    if(window.init.microserviceSettings.length >= 1){
                        let si = window.init.microserviceSettings.findIndex(set=>set.project_id == this.projects_id);
                        if(si >= 0){

                            if(window.lambda.microservice_dev){
                                return  window.init.microserviceSettings[si].dev_url;
                            } else {
                                return  window.init.microserviceSettings[si].production_url;
                            }

                        }
                    }
                }
            }
            return "";
        }
    },
    methods: {
        view(id) {
            // window.open(this.view_url + id, '_blank');
            this.rowId = id;
            this.editMode = true;
            this.$refs.form.viewMode = true;
            this.$refs.form.editModel(id);
            //From template
            if (this.templateEdit) {
                this.templateEdit();
            }
        },

        edit(id, row) {
            this.rowId = id;


                if(this.permissions){
                    if(this.permissions.gridEditConditionJS != "" && this.permissions.gridEditConditionJS != null &&  this.permissions.gridEditConditionJS != undefined){
                        let isCantEdit = isCan(this.permissions.gridEditConditionJS, row);
                        if(!isCantEdit){
                            return
                        }
                    }
                }



                this.editMode = true;
                this.$refs.form.editModel(id);
                //From template
                if (this.templateEdit) {
                    this.templateEdit();
                }



        },

        clone(id) {
            this.$refs.form.cloneModel(id);
            if (this.templateEdit) {
                this.templateEdit();
            }
        },

        quickEdit(id) {
            console.log(id);
        },

        refresh() {
            this.searchModel = null;
            this.$refs.grid.refresh();
        },

        search(q) {
            this.$refs.grid.searchData(q, 1);
        },

        stopLoading(isExported){
            this.exportLoading = false;
            if(!isExported){
                this.$Message.error('?????????? ?????? ?????????? ????????????!');
            }
        },
        exportExcel() {
            this.exportLoading = true;
            this.$refs.grid.exportExcel(this.stopLoading);
        },
        print() {
            this.$refs.grid.print();
        },
        excelUploadMethod(){
            this.$refs.grid.importExcel();
        },
        save() {
            this.$refs.grid.saveGridData();
        },

        //Form functions
        onSuccess(val) {
            // console.log("this.mode");
            // console.log(this.mode);
            if (typeof this.mode !== 'undefined' && this.mode && this.mode == 'refresh') {
                this.$refs.grid.refresh();
            } else {
                if (this.editMode) {
                    this.$refs.grid.update(val);
                } else {
                    this.$refs.grid.append(val);
                }
            }
            this.editMode = false;

            //From template
            if (this.templateOnSuccess) {
                this.templateOnSuccess(val);
            }

            //From property
            if (this.onPropertySuccess) {
                this.onPropertySuccess();
            }
        },

        onError() {
            //From template
            if (this.templateOnError) {
                this.templateOnError();
            }

            //From property
            if (this.onPropertyError) {
                this.onPropertyError();
            }
        }
    },
}
