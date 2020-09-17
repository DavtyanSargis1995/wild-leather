<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="add-product"
    enctype="multipart/form-data"
  >

    <v-row>
      <v-col>
        <v-alert color="red" text v-if="imageError">
          Նվազագույնը 2 նկար
        </v-alert>
        <div class="upload-images">
<!--          <img src="/wallet-avatar.png" alt="" class="image-avatar">-->
          <label>
            <input type="file" class="d-none" multiple @change="onImageUpload($event)">
            <div class="shadow d-flex justify-center align-items-center flex-column">
                <v-icon large color="#b8cdd7">mdi-cloud-upload</v-icon>
                Click here to upload wallet images
            </div>
          </label>
        </div>
        <div class="images d-flex">
          <div class="position-relative image-holder mr-8 mt-6" v-for="(img, index) in images">
            <div
              class="position-absolute pa-3 image-shadow d-flex justify-center align-items-center flex-column text-center"
              @click="markAsMain(index)"
              :class="{selected: index === mainImage}"
            >
              <v-btn fab dark x-small class="mx-auto">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              Գխավոր նկար
            </div>
            <img :src="img.url" alt="">
            <v-btn absolute top fab color="primary" dark x-small @click.stop="removeImage(index)" class="remove-icon">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col>
        <v-select
          outlined
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Տեսակը"
          required
          clearable
        ></v-select>


        <v-text-field
          outlined
          v-model="leather"
          :counter="10"
          :rules="nameRules"
          label="Կաշին"
          required
          clearable
        ></v-text-field>

        <v-row>
          <v-col>
            <v-text-field
              clearable
              outlined
              v-model="color"
              :rules="nameRules"
              label="Կարերի գույնը"
              class="mr-3"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              clearable
              outlined
              v-model="pockets"
              :rules="nameRules"
              label="Գրպանների քանակը"
              required
            ></v-text-field>
          </v-col>
        </v-row>


        <v-row>
          <v-col>
            <v-text-field
              v-model="size1"
              outlined
              label="Չափս"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              v-model="size2"
              label="Չափս"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="priceAMD"
              outlined
              label="Արժեք(AMD)"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              outlined
              v-model="priceUSD"
              label="Արժեք(USD)"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              outlined
              v-model="priceRUB"
              label="Արժեք(RUB)"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              outlined
              v-model="priceEUR"
              label="Արժեք(EUR)"
              :rules="nameRules"
              required
              clearable
            ></v-text-field>
          </v-col>
        </v-row>



        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-col>
    </v-row>


  </v-form>
</template>

<script>
  export default {
    name: 'EditProduct',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Պարտադիր լրացման դաշտ է',
      ],
      color: '',
      mainImage: 0,
      pockets: '',
      leather: '',
      size1: '',
      size2: '',
      select: null,
      priceAMD: '',
      priceUSD: '',
      priceEUR: '',
      priceRUB: '',
      images: [],
      imageError: false,
      items: [
        'Դրամապանակ',
        'Դրամապանակ + կախազարդ',
        'Քարտապանակ'
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate();
        this.imageError = this.images.length < 2;

        console.log(this.$refs.form)
      },
      onImageUpload(event){
        const images = [...this.images];
        if(images.length > 2) {
          return;
        }

        for (let i = 0; i< event.target.files.length; i++) {
          images.push({
            url: URL.createObjectURL(event.target.files[i]),
            type: 'blob'
          })
          if(images.length > 2) {
            break;
          }
        }
        this.images = [...images];
      },
      removeImage(index){
        this.images.splice(index,1);
      },
      markAsMain(index){
        this.mainImage = index;
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>


<style lang="scss">
  .v-dialog {
    max-width: unset!important;
    background: #fff;
    padding: 30px;
  }

  .upload-images {
    position: relative;
    width: 100%;
    max-width: 200px;
    background-color: #f4f4f4;
    padding: 10px;
    color: #a0a0a0;
    font-size: 12px;
    text-align: center;
    height: 200px;
    .shadow {
      height: 100%;
    }
  }

  .images {
    .image-holder {
      width: 150px;
      height: max-content;
      &:hover {
        .image-shadow {
          opacity: 1;
        }
      }
      .image-shadow{
        font-size: 13px;
        color: #ffffff;
        width: 100%;
        height: 100%;
        z-index: 2;
        top: 0;
        background-color: rgba(0,0,0,0.5);
        opacity: 0;
        &.selected {
          opacity: 1;
        }
        button {
          pointer-events: none;
        }
      }
      .remove-icon{
        right: -20px;
      }
      img {
        width: 100%;
      }
    }

  }

  .add-product {
    width: 90vw;
    max-width: 1200px;
  }
</style>
