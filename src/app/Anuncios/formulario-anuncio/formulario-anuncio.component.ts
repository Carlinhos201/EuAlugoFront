import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AnunciosService } from '../../services/anuncios.service';
import { MatStepper } from '@angular/material/stepper';
import { CidadesService } from 'src/app/services/cidades.service';
import Swal from 'sweetalert2';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formulario-anuncio',
  templateUrl: './formulario-anuncio.component.html',
  styleUrls: ['./formulario-anuncio.component.css']
})
export class FormularioAnuncioComponent implements OnInit {
  isLinear = false ;
  fileToUpload: any = [];
  formularioDocs: FormGroup;
  estados: Array<string> = this.cidadeService.estados
  cidades: any = [];
  arrayCidades: any[] = [];
  formulario!: FormGroup;
  usuario: any = JSON.parse(this.authService.getUserLoggedIn());
  imagem: any = []
  url: any
  constructor(
    private anuncioService: AnunciosService,
    private cidadeService: CidadesService,
    private formBuider: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.Formulario();
    this.formularioDocs = this.formBuider.group({
        arquivos: this.formBuider.array([]),
      })
      this.route.params.subscribe(params => {
        this.Formulario();
        if (params.hasOwnProperty('id')) {
          this.anuncioService.find(params['id']).subscribe(data => {
            console.log(data)
            this.buscarCidadesPorUf(data.cidade ? data.cidade.uf : '')
            this.imagem = data.imagens
            this.Formulario(data);
          });
        }
      });
  }

  Formulario(data?) {
    this.formulario = this.formBuider.group({
      id: data ? data.id : '',
      user_id: data ? data.user_id : this.usuario.user.id,
      proprietario: [data ? data.proprietario : '', Validators.required],
      email: data ? data.email : '',
      data_nasc: data ? data.data_nasc : '',
      cpf: [data ? data.cpf : '', Validators.required],
      telefone: data ? data.telefone : '',
      celular: [data ? data.celular : '', Validators.required],
      titulo: [data ? data.titulo : '', Validators.required],
      qtd_quartos: [data ? data.qtd_quartos : 1, Validators.required],
      qtd_banh: [data ? data.qtd_banh : 1],
      qtd_suites: [data ? data.qtd_suites : ''],
      qtd_garag: [data ? data.qtd_garag : ''],
      numero_andar: data ? data.numero_andar : '',
      descricao: data ? data.descricao : '',
      logradouro: [data ? data.logradouro : '', Validators.required],
      cep: [data ? data.cep : '', Validators.required],
      numero: [data ? data.numero : '', Validators.required],
      cidade_id: [data ? data.cidade_id : '', Validators.required],
      bairro: [data ? data.bairro : '', Validators.required],
      tipo: [data ? data.tipo : '', Validators.required],
      imagem: [data ? data.imagem : this.imagem],
      ativo: data ? data.ativo : '',
      uf: data ? data.uf : '',
      valor: [data ? data.valor : '', Validators.required]
      
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
        imagem: element.file,
        nome: element.name,
        caminho: "",
        anuncio_id: this.formulario.value.id,
        url: ''
      })
      }
    });
    this.formularioDocs.reset()
    this.formularioDocs.patchValue({
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
  deletarImagem(array: any) {
    let index = this.imagem.indexOf(array);
    this.imagem.splice(index, 1);
  }
  SalvarAnuncio() {
    this.formulario.value.imagem = this.imagem
    console.log(this.formulario.value)
      this.anuncioService.save(this.formulario.value, this.usuario).subscribe((res) => {
        Swal.fire("Salvo", "Anúncio salvo com sucesso", "success")
        console.log(res)
      }, (error) => {
        Swal.fire("Ops, deu erro!", "Não foi possível salvar o anúncio", "error")
      }
      )
       
    }
    atualizarAnuncio(){
      this.formulario.value.imagem = this.imagem;
      this.anuncioService.update(this.formulario.value.id, this.formulario.value).subscribe((data) =>
      {
        Swal.fire('Anúncio atualizado com sucesso!', '', 'success')
        return this.router.navigate(['/meus-anuncios'])
      },
        (error) => {
          Swal.fire('Erro', 'Erro ao atualizar Anúncio', 'error')
        }
      )
    }

    enviarFormulario()
    {
      if (this.formulario.value.id) {
        this.atualizarAnuncio()
      } else {
        this.SalvarAnuncio()
      }
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
