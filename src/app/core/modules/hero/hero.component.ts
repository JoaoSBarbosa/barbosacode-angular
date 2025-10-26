import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit, OnDestroy {
  // Texto que está sendo exibido na tela durante a animação
  displayedText: string = '';

  // Índice atual da lista de papéis/funções que estão sendo mostrados
  currentIndex: number = 0;

  // Controla se estamos deletando (true) ou digitando (false) o texto
  isDeleting: boolean = false;

  // Lista de textos que serão mostrados em sequência
  roles: string[] = ['Backend Developer', 'Frontend Developer', 'Database'];

  // Velocidade da digitação em milissegundos
  typingSpeed: number = 100;

  // Referência do setInterval para podermos limpar depois
  private typingInterval: any;

  // Controla se o indicador de scroll deve ser mostrado
  showScrollIndicator = true;

  // Flag que indica se estamos rodando no navegador (true) ou no servidor (false)
  private isBrowser: boolean;

  /**
   * No construtor, injetamos PLATFORM_ID para verificar se estamos no navegador
   * Isso é necessário porque o Angular pode rodar no servidor (SSR) onde não existe window
   */
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Quando o componente inicia:
   * 1. Adiciona listener de scroll (só no navegador)
   * 2. Inicia a animação de digitação
   */
  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      this.startTyping();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      if (this.typingInterval) {
        clearInterval(this.typingInterval);
      }
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  /**
   * Inicia o processo de digitação
   * Cria um intervalo que chama updateText() a cada typingSpeed millisegundos
   */
  private startTyping(): void {
    this.typingInterval = setInterval(() => {
      this.updateText();
    }, this.typingSpeed);
  }

  /**
   * Atualiza o texto que está sendo mostrado
   * Esta é a função principal que controla a animação de digitação
   */
  private updateText(): void {
    // Pega o texto atual da lista de roles (usando módulo para voltar ao início)
    const currentText = this.roles[this.currentIndex % this.roles.length];

    if (!this.isDeleting) {
      // MODO DIGITAÇÃO:
      // Aumenta o texto uma letra por vez
      this.displayedText = currentText.substring(
        0,
        this.displayedText.length + 1
      );

      // Quando terminar de digitar o texto completo
      if (this.displayedText === currentText) {
        this.isDeleting = true; // Muda para modo de deleção
        this.typingSpeed = 1000; // Pausa antes de começar a deletar
        clearInterval(this.typingInterval); // Para o intervalo atual
        setTimeout(() => {
          this.typingSpeed = 50; // Deletação mais rápida que digitação
          this.startTyping(); // Reinicia o processo
        }, this.typingSpeed);
      }
    } else {
      // MODO DELEÇÃO:
      // Remove uma letra por vez do final
      this.displayedText = currentText.substring(
        0,
        this.displayedText.length - 1
      );

      // Quando terminar de deletar todo o texto
      if (this.displayedText === '') {
        this.isDeleting = false; // Volta para modo de digitação
        this.currentIndex++; // Avança para o próximo texto
        this.typingSpeed = 100; // Velocidade normal de digitação
        clearInterval(this.typingInterval); // Para o intervalo atual
        setTimeout(() => this.startTyping(), 500); // Pequena pausa antes do próximo texto
      }
    }
  }

  private handleScroll(): void {
    if (this.isBrowser) {
      this.showScrollIndicator = window.scrollY <= 50;
    }
  }
}
