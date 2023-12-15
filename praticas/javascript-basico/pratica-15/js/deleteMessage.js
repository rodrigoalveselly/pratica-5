async function deleteMessage(idMessage) {
    try {
        const response = await api.delete(`/notes/${idMessage}`)

        if (response.status === 200) {
            alert('Recado excluido com sucesso com sucesso')
        }

        fetchMessages()

    } catch (error) {
        console.log('Erro ao excluir recado: ', error)
    }
}
