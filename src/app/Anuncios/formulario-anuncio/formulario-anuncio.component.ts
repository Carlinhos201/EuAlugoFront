import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AnunciosService } from '../../services/anuncios.service';
import { MatStepper } from '@angular/material/stepper';
import { CidadesService } from 'src/app/services/cidades.service';
@Component({
  selector: 'app-formulario-anuncio',
  templateUrl: './formulario-anuncio.component.html',
  styleUrls: ['./formulario-anuncio.component.css']
})
export class FormularioAnuncioComponent implements OnInit {
  isLinear = false ;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tree: FormGroup;
  fileToUpload: any = [];
  formularioDocs: FormGroup;
  estados: Array<string> = this.cidadeService.estados
  cidades: any = [];
  arrayCidades: any[] = [];
  formulario!: FormGroup;
  usuario: any = JSON.parse(this.authService.getUserLoggedIn());
  imagem: any = []
  constructor(
    private anuncioService: AnunciosService,
    private cidadeService: CidadesService,
    private formBuider: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    
    this.Formulario();
    this.formularioDocs = this.formBuider.group({
        arquivos: this.formBuider.array([]),
      })
      this.firstFormGroup = this.formBuider.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this.formBuider.group({
        secondCtrl: ['', Validators.required]
      });
      this.tree = this.formBuider.group({
        secondCtrl: ['', Validators.required]
      });
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
      uf: data ? data.uf : 'Selecione um Estado',
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
        id: "",
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
    if (event.target.files.length) {
      for (var i = 0; i < event.target.files.length; i++) {
        console.log(event.target.files[i]);
        const file = event.target.files[i];
        console.log("FILE", file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photos.push(
            this.createItem({
              name: file.name,
              file: reader.result,
            })
          );

        };
      }

    }
  }

  SalvarAnuncio() {
    this.formulario.value.imagem = this.imagem
    console.log(this.formulario.value)
      this.anuncioService.save(this.formulario.value, this.usuario).subscribe(res => {
        console.log(res)
      })
      // }
    }
    async buscarCidadesPorUf(uf) {
      let a: any = [];
     await  this.cidadeService
        .getCidadesUf(uf)
        .subscribe((res) => {
         console.log(res)
          this.arrayCidades = res;
        });
    }
}
