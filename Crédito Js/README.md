Para utilizar o sistema, é necessário entrar no arquivo "cadastro.html" e preencher o formulário que solicita informações básicas sobre a pessoa que está solicitando o empréstimo, após todas informações preenchidas será possível realizar o envio do formulário e o usuário será redirecionado para a página de ofertas, representado pelo arquivo "ofertas.html".
Na página de ofertas o usuário indica o valor que quer contratar e clica no botão "enviar", ofertas dos bancos Santander, Bradesco, Viacredi e Caixa irão aparecer, para contratar o serviço, basta clicar no respectivo botão "Contratar Plano" do banco selecionado pela pessoa.

Funcao calcularIdade - Converte a data de nascimento em idade atual do usuário [parâmetro necessário dataNascimento]

Funcao cadastrarDados - Salva as informações do usuário localmente, utilizada no formulário do arquivo "cadastro.html"

Funcao criarOferta - Cria ofertas para um banco específico [psrâmetro  necessário nomeBanco]
	Campos Oferta:
		tetoValorContratado: Valor do empréstimo solicitado, limitado a 30% da renda mensal líquida informada pelo usuário.
		nrParcelas: Número aleatório entre 8 e 24 para representar o número de parcelas.
		txJuros:  Número aleatório entre 1.3 e 3 para representar a taxa de juros cobrada pelo banco.
		valorParcela: Valor pago em cada parcela incluindo juros
		valorTotal: Valor total pago incluindo juros

Funcao listarOferta - Cria e lista ofertas para os bancos Santander, Bradesco, Viacredi e Caixa, utilizado no formulário que salva o valor emprestimoSolicitado.

Funcao selecionarOferta - Salva as informações da oferta selecionada pelo usuário no armazenamento da sessão.

Funcao finalizarOferta - Carrega os elementos da oferta selecionada em tela