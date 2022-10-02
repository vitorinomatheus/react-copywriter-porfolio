import * as Mui from '@mui/material'
import Close from '@mui/icons-material/Close';

const dialogs = [
    {
        title: 'Curso de inglês em Vancouver',
        description: 'Tive a oportunidade de fazer um intercâmbio para Vancouver, no Canadá. Lá desenvolvi o idioma através da vivência em uma host family canadense e pude aprender um pouco sobre a cultura local. Também fiz um curso intensivo de inglês - com aulas de segunda a sexta – na ILAC, uma premiada escola que recebe alunos do mundo inteiro. Fiz amizade com pessoas das mais variadas culturas, desde a colombianos até ucranianos, e desenvolvi independência.'
    },
    {
        title: 'Estágio na BPP',
        description: 'Estagiei na Biblioteca Pública do Paraná, que além de cinco andares repletos de livros, também apresenta uma vasta programação cultural. A seção a qual eu fazia parte era a infantil, e recebíamos diariamente diversas crianças e colégios. Minhas responsabilidades consistiam em recepcionar, organizar livros através do sistema, oferecer tour pela estrutura e contar histórias infantis. Também participei da equipe de mídias sociais do Zine, revista com atividades literárias infantis, e desenvolvi habilidade no Canva. Com a pandemia, a contação de histórias passou a ser online e gravei diversos vídeos para o canal do youtube da instituição.'
    },
    {
        title: 'Graduação em Letras',
        description: 'Atualmente curso Letras - Português na Universidade Tecnológica Federal do Paraná e tenho previsão de formação para 2024. Concluí com êxito matérias como Fundamentos e Crítica da Literatura, Leitura em Diferentes Mídias, Teoria da Narrativa, Produção Textual, entre outros. Produzi diversos trabalhos acadêmicos e desenvolvi uma rotina de estudos que me permite crescer na área que amo.'
    },
    {
        title: 'English Teacher',
        description: 'Fui professora de inglês na escola de idiomas Influx, ministrando aulas para diferentes níveis e idades. Buscando o melhor ensino aos meus alunos, estudava constantemente a língua inglesa e trabalhava métodos de explicação em sala de aula. Deste modo, desenvolvi uma ótima capacidade de me fazer entender por meio de palavras e trazer exemplos práticos de conteúdos que muitas vezes só vemos no papel.'
    },
    {
        title: 'Cursos sobre revisão e literatura',
        description: 'Completei o curso livre Introdução a Revisão Gramatical pela UFRGS, onde aprendi características práticas do ofício de revisor e absorvi dicas para a melhor revisão gramatical possível. Também concluí o curso Considerações sobre Dublinenses, de James Joyce, ministrado pela professora Drª. Sabrina Siqueira, da Universidade Federal de Santa Maria. Estou sempre procurando concluir cursos relacionados ao meu ofício ou à minha paixão pela literatura, deste modo cresço tecnicamente na profissão e sou capaz de introduzir elementos literários e criativos aos meus trabalhos.'
    },
    {
        title: 'Redatora de artigos sobre literatura',
        description: 'Atualmente componho o time de redação do Querido Clássico - site composto por mulheres que escrevem artigos sobre literatura, música, cinema e história. Esse projeto encantador me possibilita discorrer sobre livros que me tocaram e a relação que eles têm com o mundo. Produzo textos mensais de linguagem que mescla o acadêmico e o coloquial, trazendo informações valiosas de forma acessível. Entre os conteúdos que redigi, estão análises de obras de James Joyce, Sylvia Plath e Chico Buarque.'
    },
    {
        title: 'Revisora textual de marketing jurídico',
        description: 'Pela empresa Jurisoft, reviso textos de marketing jurídico voltados às redes sociais. Estou em contato diário com conteúdos da área do direito, assim como com técnicas voltadas à retenção e conquista de público. Apesar de ser revisora, conheço bastante ofício do copywriter e domino as técnicas dede construção de headline e call to action. Além da ortografia, reviso a estrutura textual – prestando atenção à coesão e estética.'
    },
    {
        title: 'Redatora Freelancer',
        description: 'Atuo escrevendo textos de maneira autônoma. Iniciei através da produção de roteiros para um podcast em desenvolvimento. Os conteúdos eram voltados à percepção sensorial do ouvinte, descrevendo atos do dia a dia – como beber água ou entrar em uma floricultura - de maneira literária e profunda, brincando com a sinestesia. Também redigi textos jurídicos para o blog de uma companhia que auxilia no planejamento previdenciário de seus clientes. Apesar de o conteúdo ser técnico e direcionado, trouxe a linguagem acessível e técnicas de retenção do público leitor.'
    }
]

export default function AboutMeDialogs(props: any) {

    return (
        <>
            <Mui.Dialog
                open={props.open}
                onClose={() => props.close(false, props.index)}
            >
                <Mui.DialogTitle
                    fontFamily={props.global.primaryFont}
                    fontWeight = 'bold'
                    color={props.global.primaryRed}
                    display='flex'
                    justifyContent='space-between'
                >
                    {dialogs[props.index].title}

                    <Mui.IconButton 
                        onClick={() => props.close(false, props.index)}
                    >
                        <Close />
                    </Mui.IconButton>
                </Mui.DialogTitle>

                <Mui.DialogContent>
                    <Mui.Typography
                        fontFamily={props.global.secondaryFont}
                    >
                    {dialogs[props.index].description}
                    </Mui.Typography>
                </Mui.DialogContent>
            </Mui.Dialog>
        </>
    )
}