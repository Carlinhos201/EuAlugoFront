import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AnunciosService } from '../../services/anuncios.service';
@Component({
  selector: 'app-formulario-anuncio',
  templateUrl: './formulario-anuncio.component.html',
  styleUrls: ['./formulario-anuncio.component.css']
})
export class FormularioAnuncioComponent implements OnInit {
  // documentos: any = [];
  // @ViewChild("fileInput") fileInput: ElementRef;
  fileToUpload: any = [];
  formularioDocs: FormGroup;
  formulario!: FormGroup;
  usuario: any = JSON.parse(this.authService.getUserLoggedIn());
  imagem: any = []
  constructor(
    private anuncioService: AnunciosService,
    private formBuider: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.Formulario();
    this.formularioDocs = this.formBuider.group({
        arquivos: this.formBuider.array([]),
      })
  }

  Formulario(data?) {
    this.formulario = this.formBuider.group({
      id: data ? data.id : '',
      user_id: data ? data.user_id : this.usuario.user.id,
      proprietario: data ? data.proprietario : '',
      titulo: data ? data.titulo : '',
      logradouro: data ? data.logradouro : '',
      bairro: data ? data.bairro : '',
      tipo: [data ? data.tipo : ''],
      imagem: [data ? data.imagem : []],
      // ativo: null
    })
  }
  uploadArquivo(files: FileList) {
    let docs: any = []
    docs = files;
    for (let i = 0; i < docs.length; i++) {
      this.fileToUpload.push(docs[i])
    }
    docs = []

  }
  get photos(): FormArray {
    return this.formularioDocs.get('arquivos') as FormArray;
  };
  insereArquivo() {
    console.log(this.usuario);
    this.formularioDocs.value.arquivos.forEach(element => {
      console.log(element);

      if (element.file != null) {
      this.imagem.push({
        imagem: element,
        nome: "",
        caminho: "",
        anuncio_id: this.formulario.value.id
      })
      }
    });
    this.formulario.patchValue({
      arquivos: []
    })
  }
  createItem(data): FormGroup {
    return this.formBuider.group(data);
  }
  detectFiles(event) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.photos.push(
            this.createItem({ file })
          );
        }
        reader.readAsDataURL(file);
      }
    }
  }

  SalvarAnuncio() {
    this.formulario.value.imagem = this.imagem
    console.log(this.formulario.value.imagem)
      this.anuncioService.save(this.formulario.value, this.usuario).subscribe(res => {
        console.log(res)
      })
      // }
    }
}
