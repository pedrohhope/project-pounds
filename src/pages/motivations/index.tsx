import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function MotivationsPage() {
    return (
        <div className='container-fluid'>
            <div className='mt-3'>
                <Link to='/' className='fs-5'>Voltar</Link>

            </div>
            <div className='mt-3'>
                <div>
                    <h1 className={`${styles.Title} fs-2`}>Quando surgiu a Língua Brasileira de Sinais?</h1>
                    <p className={`${styles.Paragraph}`}>
                        No Brasil, a educação dos surdos e o surgimento da Libras, a Língua Brasileira de Sinais, tem ligação com d. Pedro II, imperador entre 1840 e 1889. Em 1855, d. Pedro II convidou para o Brasil um professor francês que se chamava Ernest Huet (Hernest, em algumas fontes), e o convite era para que o francês iniciasse a educação de surdos aqui.
                        Ernest Huet era surdo desde os seus 12 anos de idade e adepto do método de Charles Michel de l’Épée. Sua atuação no Brasil iniciou-se quando foi fundado, em 1857, o Imperial Instituto dos Surdos-Mudos, instituição que atualmente é conhecida como Instituto Nacional de Educação de Surdos ou Ines. A criação dessa escola ficou registrada na Lei nº 839, de 26 de setembro de 1857.
                    </p>
                </div>
                <div>
                    <h1 className={`${styles.Title} fs-2`}>Quem foi Huet?</h1>
                    <p className={`${styles.Paragraph}`}>
                        Huet foi o pioneiro em nosso país para a educação de surdos, mas inicialmente não teve muitos alunos. O francês foi o diretor do colégio entre 1857 e 1861, e o Instituto Imperial dos Surdos-Mudos só recebia alunos em regime de internato do sexo masculino. A partir de 1861, um novo diretor foi nomeado para o instituto, porque Huet mudou-se para o México.
                        O trabalho de Huet permitiu que uma língua de sinais própria de nosso país fosse desenvolvida, e a atual Libras surgiu mediante a junção de sinais da língua francesa com sinais utilizados pelo abade L’Épée. Esse sistema de ensino implantado por Huet no Brasil predominou até o começo do século XX.
                    </p>
                </div>

                <div>
                    <h1 className={`${styles.Title} fs-2`}>Congresso de Milão</h1>
                    <p className={`${styles.Paragraph}`}>
                        Em 1880, foi realizado o Congresso de Milão, na Itália, e lá ficou definido que a educação dos surdos deveria ser realizada por meio da oralização, isto é, pela fala. Assim, os sinais ficaram proibidos de ser utilizados e as línguas de sinais que existiam foram colocadas como “inferiores”, sendo obrigação o ensino utilizar-se dos idiomas nacionais. Apesar disso, os sinais continuaram sendo utilizados pelos surdos.
                        Essa tendência seguiu em nosso país até a década de 1970, quando o Brasil começou a valer-se da filosofia da comunicação total. Essa metodologia educacional acredita que a oralização apenas não é capaz de garantir o desenvolvimento educacional pleno do aluno surdo, sendo necessário mesclar o oralismo com outros recursos, como a língua de sinais. Assim, passou-se a acreditar que o aluno surdo deve desenvolver-se no bilinguismo, aprendendo o português e a Libras.
                    </p>
                </div>

                <div>
                    <h1 className={`${styles.Title} fs-2`}>Nova República</h1>
                    <p className={`${styles.Paragraph}`}>
                        A partir da Nova República, sobretudo depois da virada do século XXI, a comunidade surda conquistou importantes direitos. Uma conquista muito importante deu-se com a Lei nº 10.436, de 24 de abril de 2002, que determinou que a Libras deve ser reconhecida como meio legal de comunicação e expressão da comunidade surda brasileira e que o poder público deve fornecer meio para o uso e difusão da Libras no Brasil.
                        No âmbito educacional, a educação de todos os brasileiros foi reconhecida como um direito na Constituição de 1988, e isso abriu espaço para que leis fossem regulamentadas para garantir o acesso do surdo a uma educação pública e de qualidade. Assim, por exemplo, ao aluno surdo ficou garantido, por lei, o direito de um acompanhamento especializado.
                        A regulamentação de leis reconhecendo a Libras e os direitos da comunidade surda brasileira é importante porque contribui para garantir a inclusão dessa comunidade
                    </p>
                </div>

                <div>
                    <h1 className={`${styles.Title} fs-2`}>Sinais para usar no dia a dia</h1>
                    <img src="./1695862003.png" alt="" className='img-fluid' />
                </div>
            </div>

            <div>
                <div className='mt-5'>
                    <h1 className={`${styles.Title} fs-2`}>Links para mais pesquisas</h1>
                    <a href='https://mundoeducacao.uol.com.br/educacao/lingua-brasileira-de-sinais-libras.htm#:~:text=A%20Língua%20Brasileira%20de%20Sinais,Huet%20para%20ensinar%20surdos%20aqui.' className={`${styles.Link}`} target='_blank'>
                        Site usado para a pesquisa
                    </a>
                </div>

                <div className='mt-4'>
                    <h1 className={`${styles.Title} fs-2`}>Aulas para iniciar nas LIBRAS</h1>
                    <p className={`${styles.Paragraph}`}>
                        A Academia de Libras é um canal que atua desde 17 de outubro de 2017. Seu canal não tem o intuito de lucrar, apenas de ensinar aos entusiastas como se comunicar apenas com gestos!
                        Segue algumas aulas para quem se interessar!
                    </p>


                    <p>
                        <a href="https://www.youtube.com/watch?v=DLjhuPMrdYw" className={`${styles.Link}`} target='_blank' >
                            APRENDER LIBRAS PELA INTERNET É POSSÍVEL?
                        </a>
                    </p>

                    <p>
                        <a href="https://www.youtube.com/watch?v=-ZDkdbPqUZg" className={`${styles.Link}`} target='_blank'>
                            COMO APRENDER LIBRAS SOZINHO DO ZERO (PASSO A PASSO)
                        </a>
                    </p>

                    <p>
                        <a href="https://www.youtube.com/watch?v=qkSfTWwds8c" className={`${styles.Link}`} target='_blank'>
                            35 SINAIS DE LIBRAS BÁSICOS MAIS USADOS (LÍNGUA DE SINAIS)
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}