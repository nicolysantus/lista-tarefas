using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using to_do_list.Data;
using to_do_list.Models;

namespace to_do_list.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListaController : ControllerBase
    {
        private readonly ApDbContext _context;

        public ListaController(ApDbContext context)
        {
            _context = context;
        }

        // GET: api/lista
        // Listar todos os itens da lista.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListaModel>>> GetLista()
        {
            return await _context.Lista.ToListAsync();
        }

        // GET: api/lista/{id}
        // Listar um item específico da lista pelo ID.
        [HttpGet("{id}")]
        public async Task<ActionResult<ListaModel>> GetListaItem(int id)
        {
            var listaItem = await _context.Lista.FindAsync(id);

            if (listaItem == null)
            {
                return NotFound();
            }

            return listaItem;
        }

        // POST: api/lista
        // Adicionar um novo item à lista.
        [HttpPost]
        public async Task<ActionResult<ListaModel>> AddListaItem(ListaModel listaItem)
        {
            _context.Lista.Add(listaItem);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetListaItem), new { id = listaItem.Id }, listaItem);
        }

        // PUT: api/lista/{id}
        // Atualizar um item existente na lista. 
        [HttpPut("{id}")]
        public async Task<IActionResult> PutListaItem(int id, [FromBody] ListaModel listaItem)
        {
      
            var existingItem = await _context.Lista.FindAsync(id);
            if (existingItem == null)
            {
                return NotFound();
            }

            if (listaItem.Título != null)
            {
                existingItem.Título = listaItem.Título;
            }

            if (listaItem.Descrição != null)
            {
                existingItem.Descrição = listaItem.Descrição;
            }

            if (listaItem.Status != null)
            {
                existingItem.Status = listaItem.Status;
            }

            await _context.SaveChangesAsync();

            return NoContent(); 
        }



        // DELETE: api/lista/{id}
        // Deletar um item da lista pelo ID.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListaItem(int id)
        {
            var listaItem = await _context.Lista.FindAsync(id);
            if (listaItem == null)
            {
                return NotFound();
            }

            _context.Lista.Remove(listaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ListaItemExists(int id)
        {
            return _context.Lista.Any(e => e.Id == id);
        }
    }
}
