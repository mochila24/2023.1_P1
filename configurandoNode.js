/*Para verificar se o pacote `prompt-sync` está instalado corretamente no seu ambiente do Node.js, você pode seguir estes passos:

1. Abra o Visual Studio Code em seu computador.

2. Abra o terminal integrado no Visual Studio Code. Você pode fazer isso indo para o menu "View" (Visualizar) e selecionando "Terminal" ou usando o atalho `Ctrl + ` ` (Windows/Linux) ou `Cmd + ` ` (Mac).

3. No terminal integrado, navegue até o diretório do seu projeto ou pasta onde você instalou o pacote `prompt-sync`.

4. Verifique se o pacote `prompt-sync` está instalado digitando o seguinte comando e pressionando Enter:

   ```
   */
   npm list prompt-sync
   /*
   ```

   Esse comando listará todas as informações relacionadas ao pacote `prompt-sync`, incluindo a versão instalada, dependências e onde o pacote está localizado no seu projeto.

   Se você vir o pacote `prompt-sync` listado com a versão instalada e sem erros, isso indica que o pacote está instalado corretamente no seu ambiente.

   Caso contrário, se o pacote não for listado ou houver erros, isso pode indicar que o pacote `prompt-sync` não foi instalado corretamente ou não está presente no seu projeto.

Se o pacote `prompt-sync` não estiver instalado, você precisará instalá-lo usando o comando `npm install prompt-sync` no terminal integrado. Certifique-se de estar no diretório do seu projeto antes de executar esse comando.

Verifique também se você incluiu a linha `const prompt = require('prompt-sync')();` no início do seu código JavaScript para importar corretamente o módulo `prompt-sync`.

Certifique-se de seguir as instruções de instalação e uso do pacote `prompt-sync` corretamente para garantir que ele esteja configurado e funcionando adequadamente no seu ambiente.







/*Para usar a biblioteca `prompt-sync` em seu código JavaScript, você pode seguir os seguintes procedimentos:

1. Instalação: Abra o terminal do seu sistema operacional e navegue até a pasta do seu projeto JavaScript. Em seguida, execute o seguinte comando para instalar a biblioteca `prompt-sync` usando o gerenciador de pacotes npm:

   ```
   */
   npm install prompt-sync
   /*
   ```

   Isso instalará a biblioteca `prompt-sync` e suas dependências em seu projeto.

2. Importação: No seu arquivo JavaScript, você precisa importar a biblioteca `prompt-sync` para usá-la. Você pode fazer isso usando a função `require()` e atribuindo o resultado a uma variável. Por exemplo:

   ```javascript
   */
   const prompt = require('prompt-sync')();
   /*
   ```

   Essa linha de código importa a biblioteca `prompt-sync` e atribui a função de prompt a uma variável chamada `prompt`.

3. Uso do prompt: Agora você pode usar a função `prompt` para receber entradas do usuário. Por exemplo:

   ```javascript
   */
   let nome = prompt('Digite seu nome: ');
   console.log('Olá, ' + nome + '!');
   /*
   ```

   Nesse exemplo, o prompt será exibido no terminal, aguardando que o usuário digite seu nome. Em seguida, o nome será armazenado na variável `nome` e exibido na mensagem de boas-vindas.

Certifique-se de que a biblioteca `prompt-sync` esteja instalada corretamente em seu projeto e que você tenha importado corretamente a função `prompt` para usá-la em seu código. Esses procedimentos permitirão que você utilize o `prompt-sync` para receber entradas do usuário em seu programa JavaScript.
*/

/*
--------------------------------------------------------------------------------------------------------------------------


NodeRun

No terminal integrado, digite o seguinte comando e pressione Enter:
*/
node --version  //Esse comando exibe a versão do Node.js instalada no seu sistema, se estiver configurada corretamente.

/*
Se você vir a versão do Node.js sendo exibida no terminal, isso indica que o Node.js está instalado e configurado corretamente no Visual Studio Code.

Caso contrário, se o comando não for reconhecido ou não exibir uma versão, isso indica que o Node.js pode não estar instalado corretamente ou não estar configurado no seu sistema.
*/

/*



HABILITAR A EXTENSÃO NODERUN A RECEBER VALORES NO TERMINAL INTEGRADO DO VISUAL STUDIO CODE


Para habilitar a extensão NodeRun a receber valores no terminal integrado do Visual Studio Code, você pode seguir estes passos:

1. Certifique-se de que você tenha a extensão NodeRun instalada e ativada no Visual Studio Code. Você pode instalá-la por meio do marketplace do Visual Studio Code.

2. Abra as configurações do Visual Studio Code. Você pode acessá-las usando o atalho `Ctrl + ,` (Windows/Linux) ou `Cmd + ,` (Mac), ou indo para o menu "File" (Arquivo) > "Preferences" (Preferências) > "Settings" (Configurações).

3. Na barra de pesquisa das configurações, digite "NodeRun". Isso filtrará as opções relacionadas à extensão NodeRun.

4. Localize a opção "Node Run: Run In Integrated Terminal" (Executar no Terminal Integrado do Node Run) e marque a caixa de seleção para habilitar essa opção.

5. Reinicie o Visual Studio Code para aplicar as alterações.

Agora, quando você executar o código JavaScript usando a extensão NodeRun, ele será executado no terminal integrado do Visual Studio Code e você poderá fornecer valores pelo teclado quando solicitado pelo programa.

Lembre-se de que esses passos podem variar dependendo da versão do Visual Studio Code ou da extensão NodeRun que você está usando. Verifique a documentação da extensão NodeRun ou as informações fornecidas pela equipe de desenvolvimento para obter instruções específicas, caso necessário.
*/