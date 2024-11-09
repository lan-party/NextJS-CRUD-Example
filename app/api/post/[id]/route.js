
import conn from '@app/database'

// GET
export const GET = async (req, {params}) => {
    
    try {
        const p = await params;

        const resp = await conn.query('SELECT * FROM public.posts WHERE id = $1', [p.id]);

        if (!resp.rows[0]) return new Response("Post not found.", {status: 404});

        const post = resp.rows[0];

        return new Response(JSON.stringify(post), {status: 200});
    }catch(e){
        return new Response("Server error.", {status: 500});
    }

}

// POST
export const POST = async (req, {params}) => {
    try{
        const p = await params;
        const r = await req.json();

        await conn.query('UPDATE public.posts SET title = $1, body = $2 WHERE id = $3', [r.title, r.body, p.id]);

        return new Response("Update Successful", {status: 200});
    }catch(e){
        return new Response("Server error.", {status: 500});
    }
}

// DELETE
export const DELETE = async (req, {params}) => {
    try{
        const p = await params;
        await conn.query('DELETE FROM public.posts WHERE id = $1', [p.id]);

        return new Response("Deletion Successful", {status: 200});
    }catch(e){
        return new Response("Server error.", {status: 500});
    }
}
