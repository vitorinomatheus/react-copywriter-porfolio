import * as Mui from '@mui/material'
import Close from '@mui/icons-material/Close';

const dialogs = [
    {
        title: 'Curso de inglês em Vancouver',
        description: 'Tive a oportunidade de fazer um intercâmbio para Vancouver, no Canadá. Lá desenvolvi o idioma através da vivência em uma host family canadense e pude aprender um pouco sobre a cultura local. Também fiz um curso intensivo de inglês - com aulas de segunda a sexta – na ILAC, uma premiada escola que recebe alunos do mundo inteiro. Fiz amizade com pessoas das mais variadas culturas, desde a colombianos até ucranianos, e desenvolvi independência.'
    },
    {
        title: 'Estágio na BPP',
        description: 'Como estagiária na Biblioteca Pública do Paraná, atuei na seção infantil e tive a oportunidade de receber diariamente diversas crianças e escolas. Minhas principais responsabilidades incluíam organizar livros através do sistema, oferecer tour pela estrutura e contar histórias infantis. Além disso, participei da equipe de mídias sociais do Zine, uma revista com atividades literárias infantis, onde desenvolvi habilidades em Canva e gravei diversos vídeos para o canal do youtube da instituição. Com a pandemia, a contação de histórias passou a ser online e pude contribuir para a adaptação das atividades para o meio virtual.'
    },
    {
        title: 'Graduação em Letras',
        description: 'Estou atualmente cursando Letras - Português na Universidade Tecnológica Federal do Paraná, com previsão de formação para 2024. Durante minha graduação, concluí com êxito matérias como Fundamentos e Crítica da Literatura, Leitura em Diferentes Mídias, Teoria da Narrativa e Produção Textual, entre outras. Como resultado, adquiri um conhecimento sólido e abrangente em diversas áreas da língua e literatura portuguesa. Além disso, produzi vários trabalhos acadêmicos que me permitiram desenvolver minhas habilidades de pesquisa e escrita. Tenho uma rotina de estudos dedicada e constante, o que me permite continuar a crescer e me aprimorar na área que amo. Estou animada para aplicar meu conhecimento e paixão pela língua e literatura portuguesa em futuros projetos acadêmicos e profissionais.'
    },
    {
        title: 'English Teacher',
        description: 'Como professora de inglês na escola de idiomas Influx, tive a oportunidade de ministrar aulas para alunos de diferentes níveis e faixas etárias. Sempre em busca do melhor ensino para meus alunos, dediquei-me a estudar a língua inglesa constantemente e aperfeiçoar meus métodos de ensino. Como resultado, desenvolvi habilidades em explicar conceitos complexos de forma clara e concisa, além de trazer exemplos práticos para enriquecer as aulas.'
    },
    {
        title: 'Cursos sobre revisão e literatura',
        description: 'Eu me dedico aos cursos sobre revisão e literatura, tendo concluído o curso livre Introdução a Revisão Gramatical pela UFRGS, que me proporcionou uma compreensão prática do ofício de revisor, além de dicas valiosas para aprimorar a revisão gramatical. Também concluí o curso Considerações sobre Dublinenses, de James Joyce, ministrado pela professora Drª. Sabrina Siqueira, da Universidade Federal de Santa Maria, o que me permitiu aprofundar meu conhecimento em literatura. Estou sempre em busca de cursos que me ajudem a crescer tecnicamente em minha profissão e enriquecer meu trabalho com elementos literários e criativos.'
    },
    {
        title: 'Redatora de artigos sobre literatura',
        description: 'Como redatora de artigos sobre literatura, faço parte da equipe de redação do Querido Clássico - um site formado por mulheres que compartilham suas perspectivas sobre livros, música, cinema e história. Esse projeto incrível me permite explorar meu amor pela literatura, escrevendo mensalmente sobre livros que me tocaram e suas conexões com o mundo. Meus textos possuem uma linguagem que mescla o acadêmico e o coloquial, tornando as informações valiosas acessíveis ao leitor. Entre os temas que já abordei, destacam-se análises de obras de autores renomados como James Joyce, Sylvia Plath e Chico Buarque.'
    },
    {
        title: 'Revisora textual de marketing jurídico',
        description: 'Como revisora textual especializada em marketing jurídico pela empresa Jurisoft, trabalho diariamente na revisão de textos destinados às redes sociais. Com vasto conhecimento na área do direito, estou constantemente atualizada sobre as tendências e técnicas de retenção e conquista de público no universo do marketing digital. Embora meu papel seja a revisão ortográfica, também estou familiarizada com o ofício do copywriting, dominando técnicas de construção de headlines e chamadas para ação. Além de garantir a correção gramatical e ortográfica, também me atento à estrutura textual, assegurando a coesão e a estética do conteúdo. Conte comigo para garantir que seus textos de marketing jurídico estejam impecáveis e eficientes.'
    },
    {
        title: 'Redatora Freelancer',
        description: 'Como redatora freelancer, presto serviços para agências de marketing digital, oferecendo conteúdo personalizado e adaptado às necessidades de cada cliente. Com habilidade em diversos temas e estilos de escrita, estou pronta para entregar textos de qualidade que atendam às demandas de cada projeto.'
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